<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

### Table of Contents

-   [ancestries][1]
-   [beltInfo][2]
    -   [Parameters][3]
-   [bloodlines][4]
-   [idsToNames][5]
    -   [Parameters][6]
-   [namesToIDs][7]
    -   [Parameters][8]
-   [categories][9]
-   [categoryInfo][10]
    -   [Parameters][11]
-   [constellationInfo][12]
    -   [Parameters][13]
-   [constellations][14]
-   [factions][15]
-   [graphicInfo][16]
    -   [Parameters][17]
-   [graphics][18]
-   [groupInfo][19]
    -   [Parameters][20]
-   [groups][21]
-   [moonsInfo][22]
    -   [Parameters][23]
-   [planetInfo][24]
    -   [Parameters][25]
-   [races][26]
-   [regionInfo][27]
    -   [Parameters][28]
-   [regions][29]
-   [stargateInfo][30]
    -   [Parameters][31]
-   [starInfo][32]
    -   [Parameters][33]
-   [stationInfo][34]
    -   [Parameters][35]
-   [structures][36]
-   [structureInfo][37]
    -   [Parameters][38]
-   [systemInfo][39]
    -   [Parameters][40]
-   [systemJumps][41]
-   [systemKills][42]
-   [systems][43]
-   [typeInfo][44]
    -   [Parameters][45]
-   [types][46]

## ancestries

Get all character ancestries.

Returns **[array][47]** 

## beltInfo

Get information on an asteroid belt.

### Parameters

-   `beltID` **[number][48]** 

Returns **[object][49]** 

## bloodlines

Get a list of bloodlines.

Returns **[object][49]** 

## idsToNames

Resolve a set of IDs to names and categories.
Supported ID’s for resolving are:
Characters, Corporations, Alliances, Stations, Solar Systems, Constellations, Regions, Types, Factions

### Parameters

-   `IDs` **\[[number][48]]** 

Returns **[array][47]** 

## namesToIDs

Resolve a set of names to IDs in the following categories:
agents, alliances, characters, constellations, corporations factions, inventory_types, regions, stations, and systems.
Only exact matches will be returned. All names searched for are cached for 12 hours.

### Parameters

-   `names` **\[[string][50]]** 

Returns **[array][47]** 

## categories

Get a list of item categories.

Returns **\[[number][48]]** 

## categoryInfo

Get information on an item category.

### Parameters

-   `categoryID` **[number][48]** 

Returns **[object][49]** 

## constellationInfo

Get information on a constellation.

### Parameters

-   `constellationID` **[number][48]** 

Returns **[object][49]** 

## constellations

Get a list of constellations.

Returns **\[[number][48]]** 

## factions

Get a list of factions.

Returns **[object][49]** 

## graphicInfo

Get information on a graphic.

### Parameters

-   `graphicID` **[number][48]** 

Returns **[object][49]** 

## graphics

Get a list of graphics.

Returns **\[[number][48]]** 

## groupInfo

Get information on an item group.

### Parameters

-   `groupID` **[number][48]** 

Returns **[object][49]** 

## groups

Get a list of item groups.

Returns **\[[number][48]]** 

## moonsInfo

Get information on a moon.

### Parameters

-   `moonID` **[number][48]** 

Returns **[object][49]** 

## planetInfo

Get information on a planet.

### Parameters

-   `planetID` **[number][48]** 

Returns **[object][49]** 

## races

Get a list of character races.

Returns **[object][49]** 

## regionInfo

Get information on a region.

### Parameters

-   `regionID` **[number][48]** 

Returns **objectt** 

## regions

Get a list of regions.

Returns **\[[number][48]]** 

## stargateInfo

Get information on a stargate.

### Parameters

-   `stargateID` **[number][48]** 

Returns **[object][49]** 

## starInfo

Get information on a star.

### Parameters

-   `starID` **[number][48]** 

Returns **[object][49]** 

## stationInfo

Get information on a station.

### Parameters

-   `stationID` **[number][48]** 

Returns **[object][49]** 

## structures

List all public structures.

Returns **\[[number][48]]** 

## structureInfo

Get structure information.

### Parameters

-   `structureID` **[number][48]** 

Returns **any** information on requested structure if you are on the ACL. Otherwise, returns “Forbidden” for all inputs.

## systemInfo

Get information on a solar system.

### Parameters

-   `systemID` **[number][48]** 

Returns **[object][49]** 

## systemJumps

Get the number of jumps in solar systems within the last hour ending at the timestamp of the Last-Modified header,
excluding wormhole space. Only systems with jumps will be listed.

Returns **[object][49]** 

## systemKills

Get the number of ship, pod and NPC kills per solar system within the last hour ending at the timestamp of the Last-Modified header,
excluding wormhole space. Only systems with kills will be listed.

Returns **[object][49]** 

## systems

Get a list of solar systems.

Returns **\[[number][48]]** 

## typeInfo

Get information on a type.

### Parameters

-   `typeID` **[number][48]** 

Returns **[object][49]** 

## types

Get a list of type ids.

Returns **\[[number][48]]** 

[1]: #ancestries

[2]: #beltinfo

[3]: #parameters

[4]: #bloodlines

[5]: #idstonames

[6]: #parameters-1

[7]: #namestoids

[8]: #parameters-2

[9]: #categories

[10]: #categoryinfo

[11]: #parameters-3

[12]: #constellationinfo

[13]: #parameters-4

[14]: #constellations

[15]: #factions

[16]: #graphicinfo

[17]: #parameters-5

[18]: #graphics

[19]: #groupinfo

[20]: #parameters-6

[21]: #groups

[22]: #moonsinfo

[23]: #parameters-7

[24]: #planetinfo

[25]: #parameters-8

[26]: #races

[27]: #regioninfo

[28]: #parameters-9

[29]: #regions

[30]: #stargateinfo

[31]: #parameters-10

[32]: #starinfo

[33]: #parameters-11

[34]: #stationinfo

[35]: #parameters-12

[36]: #structures

[37]: #structureinfo

[38]: #parameters-13

[39]: #systeminfo

[40]: #parameters-14

[41]: #systemjumps

[42]: #systemkills

[43]: #systems

[44]: #typeinfo

[45]: #parameters-15

[46]: #types

[47]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Array

[48]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Number

[49]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object

[50]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String