let express = require('express'),
    router = express.Router(),
    constants = require('../utils/constant'),
    db_insert = require('../db-functions/insert'),
    db_delete = require('../db-functions/delete'),
    db_read = require('../db-functions/read'),
    db_update = require('../db-functions/update'),
    utilsFunction = require('../utils/functions');




/**
 * @api {post} /admin/login  Signs In The EndUser
 * @apiGroup Auth
 *@apiName Login
 *  @apiParamExample {json} Input
 *    {
 *      "email": "email@example.com",
 *      "password" : "12345678"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 200,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *                      "auth": true,
 *                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjFkZTIyZWQ5MzA2MDAxNjRhYzkzYSIsImlhdCI6MTU0NTcyMzQ1MywiZXhwIjoxNTQ1ODA4MDUzfQ.82kXmuOOZAx2Yjt-oJev7dELQ3IyLTntqezVcDVf6eo",
 *                      "user": {
 *                          "_id": "5c21de22ed930600164ac93a",
 *                          "email": "123@123.com",
 *                          "__v": 0
 *                      }
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */


router.post('/login', function (req, res) {
    db_read.authenticateAdmin(req.body).then((response) => {

        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


////////////////////////////////////////////////////  EMAIL  /////////////////////////////////////////////////////////////


// POST

/**
 * @api {post} /admin/contact Inserts a Contact
 * @apiGroup Admin
 *@apiName AddContact
 *  @apiParamExample {json} Input
 *    {
 *      "email": "email@example.com",
 *      "password" : "12345678"
 *    }
 *
 *
 * @apiSuccessExample {json} Success
 *         {
 *            "responseCode": 201,
 *              "responseMessage": "Success",
 *              "data": {
 *                  "result": {
 *                      "auth": true,
 *                      "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjMjFkZTIyZWQ5MzA2MDAxNjRhYzkzYSIsImlhdCI6MTU0NTcyMzQ1MywiZXhwIjoxNTQ1ODA4MDUzfQ.82kXmuOOZAx2Yjt-oJev7dELQ3IyLTntqezVcDVf6eo",
 *                      "user": {
 *                          "_id": "5c21de22ed930600164ac93a",
 *                          "email": "123@123.com",
 *                          "__v": 0
 *                      }
 *                  }
 *              }
 *          }
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */





/**
 * @api {put} /admin/video/:id Updates Video Link
 * @apiGroup Admin
 * @apiName VideoLinkUpdate
 * @apiParam {id} Video Link Id
 *   @apiParamExample {json} Input
 * {
 *	           "link" : "www.youtube.com/weh239h23932233",
 *}
 * @apiSuccessExample {json} Success
 *{
 *   "responseCode": 201,
 *  "responseMessage": "Success",
 *  "data": {
 *     "result":  "Successfully updated video link"
 * }
 *}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */


router.post("/certificate", function (req, res) {
    db_insert.insertCertificates(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});

router.get("/certificate/blockstack/:id", function (req, res) {
    db_read.getCertificateByBlockstackId(req.params.id).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


router.get("/certificate", function (req, res) {
    db_read.getCertificates(req.body).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


router.get("/certificate/count", function (req, res) {
    db_read.getCertificateCount().then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});

router.get("/certificate/:id", function (req, res) {
    db_read.getCertificateById(req.params.id).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


/**
 ** @api {get} /issuer/participant Gets all participants
 ** @apiGroup Participants
 ** @apiName GetsAllParticipants
 ** @apiSuccessExample {json} Success
 *{
 *  "responseCode": 201,
 *  "responseMessage": "Success",
 *  "data": {
 *      "results": [
 *          {
 *              "_id": "5cab463ce0e2724e60764fb5",
 *              "blockstack_id": "5cab45929e1b3aa9bb573e53",
 *              "team": "ZERBINA",
 *              "name": "Joseph Santana",
 *              "email": "josephsantana@zerbina.com",
 *              "__v": 0
 *          },
 *          {
 *              "_id": "5cab463ce0e2724e60764fb6",
 *              "blockstack_id": "5cab45925a0da3f270b87b97",
 *              "team": "SPLINX",
 *              "name": "Dawson Dean",
 *              "email": "dawsondean@splinx.com",
 *              "__v": 0
 *          },
 *          {
 *              "_id": "5cab463ce0e2724e60764fb7",
 *              "blockstack_id": "5cab45928ee90b3748a5012d",
 *              "team": "ZUVY",
 *              "name": "Dollie French",
 *              "email": "dolliefrench@zuvy.com",
 *              "__v": 0
 *          }
 *      ]
 *    }
*}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */
router.get("/participant", function (req, res) {
    db_read.getParticipants(req.body).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    results: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


// router.post("/video",   function (req, res) {
//     db_insert.insertVideoLink(req.body).then((response) => {
//         //SUCCESS
//         res.status(201).send(
//             {
//                 responseCode: 201,
//                 responseMessage: constants.responseMessages.Success,
//                 data: {
//                     result: response
//                 }
//             }
//         )
//     }).catch((error) => {
//         //ERROR
//         res.status(500).send(
//             {
//                 responseCode: 500,
//                 responseMessage: error.message
//             }
//         )
//     });
// });


/**
 * @api {post} /issuer/participant Inserts a participant
 * @apiGroup Participants
 * @apiName InsertParticipant
 *   @apiParamExample {json} Input
 *[
 *{
 *  "blockstack_id": "5cab45929e1b3aa9bb573e53",
 *  "team": "ZERBINA",
 *  "name": "Joseph Santana",
 *  "email": "josephsantana@zerbina.com"
 *},
 *{
 *  "blockstack_id": "5cab45925a0da3f270b87b97",
 *  "team": "SPLINX",
 *  "name": "Dawson Dean",
 *  "email": "dawsondean@splinx.com"
 * }
 *]
 * @apiSuccessExample {json} Success
 *{
 *   "responseCode": 201,
 *  "responseMessage": "Success",
 *  "data": {
 *     "result": "Successfully added Participant"
 * }
 *}
 * @apiErrorExample {json} List error
 *    HTTP/1.1 503 Internal Server Error
 */

router.get("/participant/exist/:id", function (req, res) {
    db_read.ifParticipantExist(req.params.id).then((response) => {
        //SUCCESS
        res.status(200).send(
            {
                responseCode: 200,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


router.put("/participant", function (req, res) {
    db_update.updateParticipant( req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});




router.post("/do-the-magic",  function (req, res) {
    db_update.updateTeamName().then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});


router.post("/participant",  function (req, res) {
    db_insert.insertParticipant(req.body).then((response) => {
        //SUCCESS
        res.status(201).send(
            {
                responseCode: 201,
                responseMessage: constants.responseMessages.Success,
                data: {
                    result: response
                }
            }
        )
    }).catch((error) => {
        //ERROR
        res.status(500).send(
            {
                responseCode: 500,
                responseMessage: error.message
            }
        )
    });
});



module.exports = router;
