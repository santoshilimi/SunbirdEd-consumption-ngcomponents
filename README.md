# Common angular components for Sunbird consumption!

Contains common UI components powered by angular. These components are designed to be used in sunbird consumption platforms *(mobile app, web portal, offline desktop app)* to drive reusability, maintainability hence reducing the redundant development effort significantly.


# Getting Started

For help getting started with a new Angular app, check out the Angular CLI.

For existing apps, follow these steps to begin using .

## Step 1: Install the package

    npm install  @sunbird/components --save

## Step 2: Install the styles library from sunbird

    npm install @sunbird/styles --save

## Step 3: Import the modules and components

Import the NgModule for each component you want to use:

    import { ConsumptionComponentsModule } from 'consumption-components';

        @NgModule({
        ...
        imports: [ConsumptionComponentsModule],
        ...
        })
        export class PizzaPartyAppModule { }
 Alternatively, you can create a separate NgModule that imports and then re-exports all of the Angular components that you will use in your application.  By exporting them again, other modules can simply include your CustomSunbirdComponentsModule wherever components are needed,  and automatically get all of the exported modules. A good place for importing/exporting the application-wide modules is the SharedModule.
 

    import {SbLibraryCardModule} from '@sunbird/components/card';
    import {SbCourseCardModule} from '@sunbird/components/popover';

    @NgModule({
    ...
    imports: [SbLibraryCardModule, SbCourseCardModule],
    exports: [SbLibraryCardModule, SbCourseCardModule],
    ...
    })
    export class MyOwnCustomSunbirdComponentsModule { }

## Available components
| Feature | Notes|
|--|--|
|  [LibraryCard]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the library page for all consumption platforms|
|  [CourseCard]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [LibraryCardsGrid]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [LibraryCardsStackComponent]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the courses page for all consumption platforms|
|  [Confirmation Modal]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in places where a popup is needed with user prompt|
|  [LibraryFilters]([https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents](https://github.com/Sunbird-Ed/SunbirdEd-consumption-ngcomponents)) | Can be used in the library page for all consumption platforms. |

## LibraryCard
Can be used in the library page for all consumption platforms. 
 `import { LibraryCardComponent } from '@Sunbird/components/library-card'`
 
 **Selector**:   `sb-library-card`
**Exported as** : `LibraryCardComponent`

### Properties  
|Name| Description |  
|--|--|  
|@Input() content: IContent| Content Object |  
|@Input() defaultImg: string| Default image path to show when there is image unavailable |onText 
|`Optional` @Input() isMobile: boolean| Flag to distinguish mobile platform |  
|`Optional` @Input() isOffline: boolean| Flag to handle offline scenarios|  
|`Optional` @Input() offlineImg: string| Image path to show when the device is offline(Applicable when `isOffline = true`) |onText  


### Events
|Name| Description |  
|--|--|  
@Output() cardClick | Emmits this event when user clicks on the card



## LibraryCardsGrid

Can be used in the library page for all consumption platforms targetting web platform

    import { SbLibraryCardsGrid } form '@sunbird/components/SbLibraryCardsGrid'
    
Selector:  `sb-library-cards-grid`
Exported as:  `SbLibraryCardsGrid`

### Properties
|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API |
|`Optional` @Input() cardDisplayCount: Number| Number of cards to display the viewing area `Default value is 3`|
|`Optional` @Input() viewMoreButtonText: string| custom text to show in place of view all button, if there are more number of cards than "cardDisplayCount" then a button needs to be displayed. `Default value is "View All"`|


### Events

|Name| Description |
|--|--|
|@Output() buttonClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |

## LibraryCardsStackComponent

Can be used in the library page for mobile consumption

    import { LibraryCardsStackComponent} form '@sunbird/components/LibraryCardsStackComponent'
    
Selector:  `sb-library-cards-stack`
Exported as:  `LibraryCardsStackComponent`

### Properties
|Name| Description |
|--|--|
|@Input() title: boolean| Name that represents the section |
|@Input() contentList: collection<content>| Collection of contents, where each content is a object from server API |
|`Optional` @Input() cardDisplayCount: Number| Number of cards to display the viewing area `Default value is 3`|
|`Optional` @Input() viewMoreButtonText: string| custom text to show in place of view all button, if there are more number of cards than "cardDisplayCount" then a button needs to be displayed. `Default value is "View All"`|
|`Optional` @Input() isOffline: boolean|Flag to handle offline scenarios `Default value is "False"`|


### Events

|Name| Description |
|--|--|
|@Output() buttonClick| Emits this event when view all button is clicked |
|@Output() cardClick| Emits this event when card is clicked |

  
## LibraryFilters

Can be used in the library page for all consumption platforms. 

 `import { LibraryFiltersComponent } from '@Sunbird/components/library-filters'`

 **Selector**:   `sb-library-filters`

**Exported as** : `LibraryFiltersComponent`

### Properties  

|Name| Description |  
|--|--|
|@Input() list: Array<<ILibraryList>ILibraryList>| Collection of text and active |  
|@Input() layout: LibraryFiltersLayout| Pill Layout to show(Round, Square)

### Events

|Name| Description |
|--|--|
@Output() getSelectedPill | Emmits this event when user clicks on the card