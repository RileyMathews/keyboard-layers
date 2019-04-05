# keyboard-layers README

Keyboard layers allows you to set keybindings specific to a quickly accessable keyboard layer.

## Features

Use keybinding `cmd+shift+l` to toggle on the layer, `esc` to toggle off, and `ctrl+shift+t` to toggle.

### Adding layer keybindings
To add a keybinding specific to the layer, add the following JSON object to your keybindings settings.

```
[
  {
    "key": "b",
    "command": "cursorDown",
    "when": "config.keyboardlayer.active"
  }
]
```

The example above will make the key `b` move the cursor down whenever the layer is active.
