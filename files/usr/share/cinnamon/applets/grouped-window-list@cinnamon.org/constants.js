const constants = {
    CLOSE_BTN_SIZE: 22,
    THUMBNAIL_ICON_SIZE: 16,
    OPACITY_OPAQUE: 255,
    BUTTON_BOX_ANIMATION_TIME: 0.15,
    MAX_BUTTON_WIDTH: 150, // Pixels
    FLASH_INTERVAL: 500,
    RESERVE_KEYS: ['willUnmount'],
    ICON_NAMES: [
        'area-shot',
        'friends',
        'news',
        'prefs',
        'ssw',
        'big-picture',
        'fullscreen',
        'new-window',
        'previous',
        'stop-quit',
        'calc',
        'impress',
        'next',
        'screenshots',
        'store',
        'community',
        'library',
        'open-computer',
        'screen-shot',
        'window-shot',
        'compose',
        'mute',
        'open-home',
        'servers',
        'window',
        'contacts',
        'new-document',
        'open-trash',
        'settings',
        'writer',
        'document',
        'new-private-window',
        'play-pause',
        'ssa',
        'draw',
        'new-root-window',
        'play',
        'ssf',
    ],
    TitleDisplay: {
        None: 1,
        App: 2,
        Title: 3,
        Focused: 4
    },
    FavType: {
        favorites: 0,
        pinnedApps: 1,
        none: 2
    },
    autoStartStrDir: './.config/autostart',
};

module.exports = constants;