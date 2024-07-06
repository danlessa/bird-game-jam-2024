export class GameSounds {

    static musicSound: Phaser.Sound.WebAudioSound;

    static bubbleSound: Phaser.Sound.WebAudioSound;

    static decisionSound: Phaser.Sound.WebAudioSound;
    static eventGoodSound: Phaser.Sound.WebAudioSound;
    static eventBadSound: Phaser.Sound.WebAudioSound;

    static effectsEnabled: boolean;

    static init(scene: Phaser.Scene) {

        if (GameSounds.musicSound) {

            return;
        }

        GameSounds.musicSound = scene.sound.add("music") as Phaser.Sound.WebAudioSound;
        GameSounds.musicSound.play({ loop: true, volume: 1.0 });

        GameSounds.bubbleSound = scene.sound.add("bubble") as Phaser.Sound.WebAudioSound;
        GameSounds.effectsEnabled = true;


        GameSounds.decisionSound = scene.sound.add("decision") as Phaser.Sound.WebAudioSound;
        GameSounds.effectsEnabled = true;

        GameSounds.eventGoodSound = scene.sound.add("event_good") as Phaser.Sound.WebAudioSound;
        GameSounds.effectsEnabled = true;

        GameSounds.eventBadSound = scene.sound.add("event_bad") as Phaser.Sound.WebAudioSound;
        GameSounds.effectsEnabled = true;
    }

    static toggleMusic() {

        if (GameSounds.musicEnabled) {

            GameSounds.musicSound.pause();

        } else {

            GameSounds.musicSound.resume();
        }
    }

    static get musicEnabled() {

        return GameSounds.musicSound && GameSounds.musicSound.isPlaying;
    }

    static toggleEffects() {

        GameSounds.effectsEnabled = !GameSounds.effectsEnabled;
    }

    static playBubble() {

        if (GameSounds.effectsEnabled) {

            GameSounds.bubbleSound.play();
        }
    }

    static playDecision() {

        if (GameSounds.effectsEnabled) {

            GameSounds.decisionSound.play();
        }
    }

    static playEventGood() {

        if (GameSounds.effectsEnabled) {

            GameSounds.eventGoodSound.play();
        }
    }

    static playEventBad() {

        if (GameSounds.effectsEnabled) {

            GameSounds.eventBadSound.play();
        }
    }
}