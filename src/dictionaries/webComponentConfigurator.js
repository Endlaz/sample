import { useWebHeroConfigurationDictionary } from './webHeroConfiguration.js';
import { useWebTextConfigurationDictionary } from './webTextConfiguration.js';
import { useWebCardConfigurationDictionary } from './webCardConfiguration.js';
import { useWebImageConfigurationDictionary } from './webImageConfiguration.js';
import { useWebYoutubeConfigurationDictionary } from './webYoutubeConfiguration.js';
import { useWebSpacerConfigurationDictionary } from './webSpacerConfiguration.js';

export function useWebComponentConfiguratorDictionary() {
    return {
        WebHero: useWebHeroConfigurationDictionary(),
        WebText: useWebTextConfigurationDictionary(),
        WebCard: useWebCardConfigurationDictionary(),
        WebImage: useWebImageConfigurationDictionary(),
        WebYoutube: useWebYoutubeConfigurationDictionary(),
        WebSpacer: useWebSpacerConfigurationDictionary(),
    };
}
