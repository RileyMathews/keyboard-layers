import ConfigurationLoader from "../configuration-loader";
import StatusBarStatusDisplay from "./status-bar-status-display";
import ColorChangeStatusDisplay from "./color-change-status-display";

export default class StatusDisplayController {
    private config: ConfigurationLoader;
    private notification: StatusDisplayInterface;

    public constructor(configuration: ConfigurationLoader) {
        this.config = configuration;
        this.notification = new StatusBarStatusDisplay;
    }

    public enable() {
        this.setNotification(this.config.loadConfiguration().config.get('notification', 'Status Bar Icon'));
        this.notification.displayEnabled();
    }

    public disable() {
        this.notification.displayDisabled();
    }

    private setNotification(type: String) {
        switch (type) {
            case 'Status Bar Icon':
                this.notification = new StatusBarStatusDisplay;
                break;
            case 'Theme Color Change':
                this.notification = new ColorChangeStatusDisplay(new ConfigurationLoader);
        }
    }
}