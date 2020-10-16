const request = require('./esiJS-Utils/request')
const inputValidation = require('./esiJS-Utils/inputValidation')

module.exports = {
    /**
     * Get a list of all the corporations a corporation has been a member of

     * @param corpID {number} The corporation to get the corporation history of.
     * @returns {number[]} A array of corporation IDs.
     */
    corporationHistory(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.corporationHistory' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/corporationhistory`
        })
    },
    /**
     * Get the icon urls for a corporation.

     * @param corpID {number} The corporation ID to get the icon of.
     * @returns {object} Links to the different sizes of the corporation icon.
     */
    icons(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.icon' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/icons`
        })
    },
    /**
     * Get public information about a corporation.

     * @param corpID {number} The corporation ID to get info from.
     * @returns {object} Public info on the corporation.
     */
    info(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.info' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}`
        })
    },
    /**
     * Get a list of NPC corporations.

     * @returns {number[]} A array of all NPC corporations.
     */
    npcCorps() {
        return request({
            subUrl: `corporations/npccorps`
        })
    },
    /**
     * Get corporation blueprints.
     * @requires esi-corporations.read_blueprints.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @returns a list of blueprints the corporation owns.
     */
    blueprints(corporationID, page = 1) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.blueprints' requires a corporation ID!`
        })
        inputValidation({
            input: page,
            type: 'number',
            message: `The function 'corporation.blueprints' requires a page number, not a ${typeof page}!`
        })

        return request({
            subUrl: `corporations/${corporationID}/blueprints`,
            needsAuth: true
        })
    },
    /**
     * Get all corporation ALSC logs.
     * @requires esi-corporations.read_container_logs.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @param {number} page Which page of results to return. Defaults to 1
     * @returns logs recorded in the past seven days from all audit log secure containers (ALSC) owned by a given corporation.
     */
    secureContainerLogs(corporationID, page = 1) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.secureContainerLogs' requires a corporation ID!`
        })
        inputValidation({
            input: page,
            type: 'number',
            message: `The function 'corporation.secureContainerLogs' requires a page number, not a ${typeof page}!`
        })

        return request({
            subUrl: `corporations/${corporationID}/containers/logs`,
            needsAuth: true
        })
    },
    /**
     * Get corporation divisions.
     * @requires esi-corporations.read_divisions.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @returns corporation hangar and wallet division names, only show if a division is not using the default name
     */
    divisions(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.divisions' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/divisions`
        })
    },
    /**
     * Get corporation facilities.
     * @requires esi-corporations.read_facilities.v1
     * @requires one of the following EVE corporation role(s): Factory_Manager
     * @param {number} corporationID
     * @returns a corporation’s facilities.
     */
    facilities(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.facilities' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/facilities`
        })
    },
    medals: {
        /**
         * Get corporation medals.
         * @requires esi-corporations.read_medals.v1
         * @param {number} corporationID
         * @returns a corporation’s medals.
         */
        medals(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.medals.medals' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/medals`
            })
        },
        /**
         * Get corporation issued medals.
         * @requires esi-corporations.read_medals.v1
         * @param {number} corporationID
         * @returns medals issued by a corporation
         */
        issued(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.medals.issued' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/medals/issued`
            })
        },
    },
    members: {
        /**
         * Get corporation members.
         * @requires esi-corporations.read_corporation_membership.v1
         * @param {number} corporationID
         * @returns the current member list of a corporation, the token’s character need to be a member of the corporation.
         */
        members(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.members' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members`
            })
        },
        /**
         * Get corporation member limit.
         * @requires esi-corporations.track_members.v1
         * @requires one of the following EVE corporation role(s): Director
         * @param {number} corporationID
         * @returns a corporation’s member limit, not including CEO himself
         */
        limit(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.limit' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members/limit`
            })
        },
        /**
         * Get corporation's members' titles.
         * @requires esi-corporations.read_titles.v1
         * @requires one of the following EVE corporation role(s): Director
         * @param {number} corporationID
         * @returns a corporation’s members’ titles.
         */
        titles(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.titles' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/members/titles`
            })
        },
        /**
         * Track corporation members.
         * @requires esi-corporations.track_members.v1
         * @requires one of the following EVE corporation role(s): Director
         * @param {number} corporationID
         * @returns additional information about a corporation’s members which helps tracking their activities
         */
        tracking(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.members.tracking' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/membertracking`
            })
        },
    },
    roles: {
        /**
         * Get corporation member roles.
         * @requires esi-corporations.read_corporation_membership.v1
         * @param {number} corporationID
         * @returns the roles of all members if the character has the personnel manager role or any grantable role.
         */
        roles(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.roles.roles' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/roles`
            })
        },
        /**
         * Get corporation member roles history.
         * @requires esi-corporations.read_corporation_membership.v1
         * @param {number} corporationID
         * @returns how roles have changed for a coporation’s members, up to a month
         */
        history(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.roles.history' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/roles/history`
            })
        },
    },
    /**
     * Get corporation shareholders.
     * @requires esi-wallet.read_corporation_wallets.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @returns the current shareholders of a corporation.
     */
    shareholders(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.shareholders' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/shareholders`
        })
    },
    /**
     * Get corporation standings.
     * @requires esi-corporations.read_standings.v1
     * @param {number} corporationID
     * @returns corporation standings from agents, NPC corporations, and factions.
     */
    standings(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.standings' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/standings`
        })
    },
    starbases: {
        /**
         * Get corporation starbases (POSes).
         * @requires esi-corporations.read_starbases.v1
         * @requires one of the following EVE corporation role(s): Director
         * @param {number} corporationID
         * @returns list of corporation starbases (POSes).
         */
        starbases(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.starbases.starbases' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/starbases`
            })
        },
        /**
         * Get starbase (POS) detail.
         * @requires esi-corporations.read_starbases.v1
         * @requires one of the following EVE corporation role(s): Director
         * @param {number} corporationID
         * @param {number} starbaseID
         * @param {number} systemID The solar system this starbase (POS) is located in
         */
        info(corporationID, starbaseID, systemID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a corporation ID!`
            })
            inputValidation({
                input: starbaseID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a starbase ID!`
            })
            inputValidation({
                input: systemID,
                type: 'number',
                message: `The function 'corporation.starbases.info' requires a system ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/starbases/${starbaseID}`
            })
        },
    },
    /**
     * Get corporation titles.
     * @requires esi-corporations.read_titles.v1
     * @requires one of the following EVE corporation role(s): Director
     * @param {number} corporationID
     * @returns a corporation’s titles.
     */
    titles(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.titles' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/titles`
        })
    },
    /**
     * Get corporation structures.
     * @requires esi-corporations.read_structures.v1
     * @requires one of the following EVE corporation role(s): Station_Manager
     * @param {number} corporationID
     * @returns a list of corporation structures. This route’s version includes the changes to structures detailed in this blog: https://www.eveonline.com/article/upwell-2.0-structures-changes-coming-on-february-13th
     */
    structures(corporationID) {
        inputValidation({
            input: corporationID,
            type: 'number',
            message: `The function 'corporation.structures' requires a corporation ID!`
        })

        return request({
            subUrl: `corporations/${corporationID}/structures`
        })
    },
    assets: {
        /**
         * Get corporation assets.
         * @requires esi-assets.read_corporation_assets.v1
         * @param {number} corporationID


        * @returns {JSON} A list of the corporations assets.
        */
        assets(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets.assets' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets`,
                needsAuth: true
            })
        },
        /**
         * Get corporation asset locations.
         * @param {number} corporationID
         * @param {number[]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1


        * @returns {JSON} Locations for a set of item ids, which you can get from corporation assets endpoint. Coordinates for items in hangars or stations are set to (0,0,0)
        */
        locations(corporationID, itemIDs = []) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets.locations' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assets.locations' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/locations`,
                requestType: 'post',
                body: {
                    item_ids: itemIDs
                },
                needsAuth: true
            })
        },
        /**
         * Get corporation asset names.
         * @param {number} corporationID
         * @param {number[]} itemIDs
         * @requires esi-assets.read_corporation_assets.v1


        * @returns {JSON} Names for a set of item ids, which you can get from corporation assets endpoint. Typically used for items that can customize names, like containers or ships.
        */
        names(corporationID, itemIDs) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.assets.names' requires a corporation ID!`
            })
            inputValidation({
                input: itemIDs,
                type: 'object',
                message: `The function 'corporation.assets.names' requires a array of item IDs!`
            })

            return request({
                subUrl: `corporations/${corporationID}/assets/names`,
                requestType: 'post',
                query: {
                    item_ids: itemIDs
                },
                needsAuth: true
            })
        }
    },
    bookmarks: {
        /**
         * List corporation bookmarks
         * @param {number} corporationID
         * @requires esi-bookmarks.read_corporation_bookmarks.v1


        * @returns {JSON} A list of your corporation’s personal bookmarks.
        */
        bookmarks(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.bookmarks' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/bookmarks`
            }, true)
        },
        /**
         * List corporation bookmark folders
         * @param {number} corporationID
         * @requires esi-bookmarks.read_corporation_bookmarks.v1


        * @returns {JSON} A list of your corporation’s personal bookmark folders.
        */
        folders(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.bookmarkFolders' requires a corporation ID!`
            })

            return request({
                subUrl: `corporations/${corporationID}/bookmarks/folders`
            }, true)

        }
    },
    contacts: {
        /**
         * Get corporation contacts.
         * @param {number} corporationID

         * @requires esi-corporations.read_contacts.v1
         * @returns {JSON}
         */
        contacts(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contacts.contacts' requires a corporation ID!`
            })

            request({
                subUrl: `corporations/${corporationID}/contacts`,
                needsAuth: true
            })
        },
        /**
         * Get corporation contact labels
         * @param {number} corporationID

         * @returns esi-corporations.read_contacts.v1
         */
        labels(corporationID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contacts.labels' requires a corporation ID!`
            })

            request({
                subUrl: `corporations/${corporationID}/contacts/labels`,
                needsAuth: true
            })
        }
    },
    contracts: {
        /**
         * Get corporation contracts.
         * @param {number} corporationID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns contracts available to a corporation, only if the corporation is issuer, acceptor or assignee. Only returns contracts no older than 30 days, or if the status is "in_progress".
         */
        contracts(corporationID) {
            inputValidation({
                input: characterID,
                type: 'number',
                message: `The function 'corporation.contracts.contracts' requires a corporation ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/`,
                needsAuth: true
            })
        },
        /**
         * Get corporation contract bids.
         * @param {number} corporationID
         * @param {number} contractID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns bids on a particular auction contract.
         */
        bids(corporationID, contractID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contracts.bids' requires a corporation ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'corporation.contracts.bids' requires a contract ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/${contractID}/bids`,
                needsAuth: true
            })
        },
        /**
         * Get corporation contract items.
         * @param {number} corporationID
         * @param {number} contractID
         * @requires esi-contracts.read_corporation_contracts.v1
         * @returns items of a particular contract.
         */
        items(corporationID, contractID) {
            inputValidation({
                input: corporationID,
                type: 'number',
                message: `The function 'corporation.contracts.items' requires a corporation ID!`
            })
            inputValidation({
                input: contractID,
                type: 'number',
                message: `The function 'corporation.contracts.items' requires a contract ID!`
            })
            request({
                subUrl: `/corporations/${corporationID}/contracts/${contractID}/items`,
                needsAuth: true
            })
        }
    },
}