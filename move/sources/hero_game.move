module iota_hero::hero_game {
    use std::string::{Self, String};
    use iota::object::{Self, UID, ID};
    use iota::transfer;
    use iota::tx_context::{Self, TxContext};
    use iota::url::{Self, Url};
    use iota::event;

    // --- Structs ---
    struct Hero has key, store {
        id: UID,
        name: String,
        level: u64,
        power: u64,
        img_url: Url,
    }

    // --- Events (Để Frontend bắt được sự kiện) ---
    struct HeroCreated has copy, drop {
        id: ID,
        owner: address,
        name: String,
    }

    struct LevelUpEvent has copy, drop {
        id: ID,
        new_level: u64,
    }

    // --- Functions ---

    public entry fun create_hero(name_bytes: vector<u8>, img_bytes: vector<u8>, ctx: &mut TxContext) {
        let sender = tx_context::sender(ctx);
        let id = object::new(ctx);
        let hero_id = object::uid_to_inner(&id);

        let hero = Hero {
            id,
            name: string::utf8(name_bytes),
            level: 1,
            power: 10,
            img_url: url::new_unsafe_from_bytes(img_bytes),
        };

        // Phát ra sự kiện đã tạo Hero
        event::emit(HeroCreated {
            id: hero_id,
            owner: sender,
            name: string::utf8(name_bytes),
        });

        transfer::transfer(hero, sender);
    }

    public entry fun level_up(hero: &mut Hero) {
        hero.level = hero.level + 1;
        hero.power = hero.power * 2; // Tăng sức mạnh gấp đôi mỗi cấp

        event::emit(LevelUpEvent {
            id: object::uid_to_inner(&hero.id),
            new_level: hero.level,
        });
    }
}