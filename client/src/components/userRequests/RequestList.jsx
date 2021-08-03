//import React, { useState, useEffect } from "react";
//import axios from 'axios';
import { Link } from "react-router-dom";

import RequestListItem from "./RequestListItem";
import useRequestListData from "../../Hooks/useRequestListData.js";

import './RequestList.scss';
/**
 * This component renders Requests List including offers to pass it down to offers component submitted by a specific customer through mapping and using RequstListItem component
 * No props are passed to this function yet (Should take array of requests)
 * @returns single request
 */
const RequestList = (props) => {

  /**
   * Data Sample: List of objects like this
   *   {[
    id: 2,
    title: 'Broken Fan',
    street_address: '111 King Street East',
    city: 'Toronto',
    category_id: 2,
    preferred_date: null,
    preferred_time: null,
    img_url: 'https://c8.alamy.com/comp/WDF2GC/close-up-of-abandoned-floor-fan-WDF2GC.jpg',
    description: 'Fan not working. Blades are broken and need someone to replace',
    client_id: 1,
    provider_id: null,
    date_completed: null,
    longitude: null,
    latitude: null,
    price: null
  }]
  offers:[
      {
    id: 2,
    request_id: 2,
    provider_id: null,
    quote: '$200',
    offer_comment: 'can fix it but need tools to help',
    title: 'Paint Basement',
    street_address: '4350 Robson St',
    city: 'Vancouver',
    price: null,
    category_id: 3,
    preferred_date: 2021-08-16T04:00:00.000Z,
    preferred_time: null,
    img_url: null,
    description: 'Need the whole basement repainted',
    client_id: 1,
    date_completed: null,
    longitude: null,
    latitude: null
  }
  ]
   */
  const { requestListState, setRequstListState } = useRequestListData();


  //  console.log(userId);

  return (<div class="requstList">
    {/* This check is to not map if this was not loaded the first time */}
    <Link>
      <button> Request Service </button>{" "}
    </Link>
    {requestListState.requestList && requestListState.requestList.map(requestItem => {
      let requestOffers = requestListState.offers && requestListState.offers.filter(offer => offer.request_id === requestItem.id)
      //console.log(requestOffers)
      return (
        <RequestListItem  OffersRequests={{requestItem:requestItem,requestOffers:requestOffers}}/>
      )
    })}
  </div>
  )
};

export default RequestList;
