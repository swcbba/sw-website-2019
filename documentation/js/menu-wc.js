'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">sw-website documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-2325bea6afda81147ca03ca9e7a30a3b"' : 'data-target="#xs-components-links-module-AppModule-2325bea6afda81147ca03ca9e7a30a3b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-2325bea6afda81147ca03ca9e7a30a3b"' :
                                            'id="xs-components-links-module-AppModule-2325bea6afda81147ca03ca9e7a30a3b"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AppRoutingModule.html" data-type="entity-link">AppRoutingModule</a>
                            </li>
                            <li class="link">
                                <a href="modules/CoreModule.html" data-type="entity-link">CoreModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-CoreModule-a7200a2d8f9fe4f99f30f3015ba5549c"' : 'data-target="#xs-injectables-links-module-CoreModule-a7200a2d8f9fe4f99f30f3015ba5549c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-CoreModule-a7200a2d8f9fe4f99f30f3015ba5549c"' :
                                        'id="xs-injectables-links-module-CoreModule-a7200a2d8f9fe4f99f30f3015ba5549c"' }>
                                        <li class="link">
                                            <a href="injectables/LanguageService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>LanguageService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/HomeModule.html" data-type="entity-link">HomeModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' : 'data-target="#xs-components-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' :
                                            'id="xs-components-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                            <li class="link">
                                                <a href="components/AboutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AboutComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/BannerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BannerComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/CountDownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">CountDownComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/EventsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">EventsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/HomeComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">HomeComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LocationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LocationComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/MetricsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">MetricsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/ParticipantsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParticipantsComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/PartnersComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PartnersComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/SponsorsComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SponsorsComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' : 'data-target="#xs-directives-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' :
                                        'id="xs-directives-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                        <li class="link">
                                            <a href="directives/ScrollSpyDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ScrollSpyDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' : 'data-target="#xs-injectables-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' :
                                        'id="xs-injectables-links-module-HomeModule-39e1a7950a729901dcb17866f06fd93c"' }>
                                        <li class="link">
                                            <a href="injectables/EventService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>EventService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/MetricsService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>MetricsService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/PartnerService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>PartnerService</a>
                                        </li>
                                        <li class="link">
                                            <a href="injectables/SponsorService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>SponsorService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' : 'data-target="#xs-components-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' :
                                            'id="xs-components-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' }>
                                            <li class="link">
                                                <a href="components/FooterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">FooterComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/LanguageButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LanguageButtonComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/NavbarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">NavbarComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' : 'data-target="#xs-directives-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' :
                                        'id="xs-directives-links-module-LayoutModule-5955433966a08b8f14cf3ca7a07cd1a4"' }>
                                        <li class="link">
                                            <a href="directives/SidenavDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">SidenavDirective</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/SharedModule.html" data-type="entity-link">SharedModule</a>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#directives-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' : 'data-target="#xs-directives-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' }>
                                        <span class="icon ion-md-code-working"></span>
                                        <span>Directives</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="directives-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' :
                                        'id="xs-directives-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' }>
                                        <li class="link">
                                            <a href="directives/ParallaxDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">ParallaxDirective</a>
                                        </li>
                                        <li class="link">
                                            <a href="directives/TransparentNavbarDirective.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules">TransparentNavbarDirective</a>
                                        </li>
                                    </ul>
                                </li>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#pipes-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' : 'data-target="#xs-pipes-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' }>
                                            <span class="icon ion-md-add"></span>
                                            <span>Pipes</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="pipes-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' :
                                            'id="xs-pipes-links-module-SharedModule-b9d7a464f4979558d61db9863104cf62"' }>
                                            <li class="link">
                                                <a href="pipes/TwoDigitsTransformPipe.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">TwoDigitsTransformPipe</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/DataService.html" data-type="entity-link">DataService</a>
                            </li>
                            <li class="link">
                                <a href="classes/SocialLink.html" data-type="entity-link">SocialLink</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/EventService.html" data-type="entity-link">EventService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LanguageService.html" data-type="entity-link">LanguageService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/MetricsService.html" data-type="entity-link">MetricsService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PartnerService.html" data-type="entity-link">PartnerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/SponsorService.html" data-type="entity-link">SponsorService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#interfaces-links"' :
                            'data-target="#xs-interfaces-links"' }>
                            <span class="icon ion-md-information-circle-outline"></span>
                            <span>Interfaces</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? ' id="interfaces-links"' : 'id="xs-interfaces-links"' }>
                            <li class="link">
                                <a href="interfaces/DataType.html" data-type="entity-link">DataType</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Event.html" data-type="entity-link">Event</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Metric.html" data-type="entity-link">Metric</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Partner.html" data-type="entity-link">Partner</a>
                            </li>
                            <li class="link">
                                <a href="interfaces/Sponsor.html" data-type="entity-link">Sponsor</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <a data-type="chapter-link" href="routes.html"><span class="icon ion-ios-git-branch"></span>Routes</a>
                        </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});