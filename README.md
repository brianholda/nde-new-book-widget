# NDE New Book Widget
## Screenshot
<img width="1877" height="498" alt="new book widget example" src="https://github.com/user-attachments/assets/fed8f72d-afc6-457d-bb6e-aa92666849b0" />

This code modifies and enhances the [Primo VE showcase widget](https://developers.exlibrisgroup.com/blog/primo-showcase-how-to-embed/)

## Steps
1. Start with [NDE Custom Module](https://github.com/ExLibrisGroup/customModule) to gain access to NDE Angular customizations.
2. Copy `src/app/nde-landing-page-custom` directory to your project.
1. In nde-landing-page-custom.component.ts, update the PNXS_URL (lines 22-47) by doing the following:
   1. Perform a search for results you'd want displayed in the book widget
   2. Inspect Element > Network tab > search for `pnx` to copy the search API url. Screenshot example: ![example of finding pnx in network tab](https://github.com/user-attachments/assets/1f118714-e5c7-4bf3-ac0d-ea593bf7ca19)
   3. Remove the domain (e.g. `https://calvin.primo.exlibrisgroup.com`)
   4. Change path from `/rest/pub/pnxs` to `/rest/external/pnxs`
   5. Change `limit=10` to `limit=20`
   6. Output URL would look something like `/primaws/rest/external/pnxs?citationTrailFilterByAvailability=true&limit=20&newspapersActive=true&newspapersSearch=false&offset=0&pcAvailability=false&scope=MyInst_and_CI&searchInFulltextUserSelection=true&disableCache=false&skipDelivery=Y&sort=rank&tab=Everything&inst=01CALVIN_INST&rapido=true&refEntryActive=false&rtaLinks=true&qInclude=&qExclude=&multiFacets=&q=any%2Ccontains%2Ctrue&isCDSearch=false&featuredNewspapersIssnList=&lang=en&explain=&otbRanking=&isRelatedItems=false&vid=01CALVIN_INST:NDE_Live`
   7. Then use that URL to fill in the parameters in PNX_URL (lines 22-47)
8. In nde-landing-page-custom.component.ts, update the permalink (line 140) to match the beginning URL of the permalink at your institution (grab any permalink, and look at how it starts).
4. Edit your customComponentMappings.ts file to map the component
   ```
   import { NdeLandingPageCustomComponent } from "../nde-landing-page-custom/nde-landing-page-custom.component";
   // Define the map
   export const selectorComponentMap = new Map<string, any>([
    ['nde-landing-page', NdeLandingPageCustomComponent]
   ]);
   ```
6. Copy the HTML and CSS file found in `src/assets/homepage/` directory to your project (if you've already made homepage_en.html or homepage.css file(s) this will overwrite them, thus you may want to just manually copy the code)
