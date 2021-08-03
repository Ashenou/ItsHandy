// example for querying the database

/**
 * Get all offers from the database given client id.
 * @param {Object} db Dataabse object.
 * @param {Integer} requestId The id of the client.
 * @return {Promise<{}>} A promise to the customer.
 */
const getAllOffers = function (db,id) {
  const query = "select * from offers join requests on offers.request_id = requests.id where requests.client_id=$1";
  return db.query(query,[id])
    .then((result) => {
      console.log(result.rows);
      return result.rows;
    });
};

// /**
//  * Get all offers from the database given their requestId.
//  * @param {String} requestId The id of the request by the user.
//  * @return {Promise<{}>} A promise to the customer.
//  */
//  const getOffersByRequestId = function(db, requestId) {
//   const queryString = `
//     SELECT *
//     FROM offers
//     WHERE request_id = $1;
//     `;
//   const queryParams = [requestId];
//   return db.query(queryString, queryParams)
//     .then((result) => {
//       console.log(result.rows);
//       return result.rows;
//     });
// }

/**
 * Get first offers from the database given their requestId and providerId.
 * @param {String} requestId The id of the request by the user.
 * @param {String} providerId The id of the service provider.
 * @return {Promise<{}>} A promise to the customer.
 */
 const getFirstOfferByRequestIdAndProviderId = function(db, requestId, providerId) {
   console.log(requestId, providerId);
  const queryString = `
    SELECT *
    FROM offers
    WHERE request_id = $1 AND provider_id = $2;
    `;
  const queryParams = [requestId, providerId];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}

/**
 * Update offer in the database given their requestId.
 * @param {Integer} requestId The id of the request by the user.
 * @param {Integer} providerId The id of the service provider
 * @param {String} quote The quote given by the service provider
 * @param {String} comment comment from the service provider
 * @return {Promise<{}>} A promise to the customer.
 */
 const addOfferForRequestByProvider = function(db, requestId, providerId, quote, comment) {
  const queryString = `
  INSERT INTO offers(request_id, provider_id, quote, offer_comment)
  VALUES ($1, $2, $3, $4)
  RETURNING *;
    `;
  const queryParams = [requestId, providerId, quote, comment];
  return db.query(queryString, queryParams)
    .then((result) => {
      console.log(result.rows);
      return result.rows[0];
    });
}

module.exports = {
  getAllOffers,
  // getOffersByRequestId,
  getFirstOfferByRequestIdAndProviderId,
  addOfferForRequestByProvider
};