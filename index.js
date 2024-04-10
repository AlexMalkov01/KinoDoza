"use strict";

const GET_FILM_LIST = 'https://kinopoiskapiunofficial.tech/api/v2.2/films/collections?type=TOP_POPULAR_MOVIES&page='

const API_HEADERS = {
    'X-API-KEY': '58e91374-c861-46b6-af80-5beabf6d50d2',
    'Content-Type': 'application/json',
}

const GET_VIDEO = `https://kinopoiskapiunofficial.tech/api/v2.2/films`

export { GET_FILM_LIST , API_HEADERS , GET_VIDEO };

import { Pagination } from "./pagination.js" 
import {  KinoDose  } from "./KinoDoze.js" 

const kinoDose = new KinoDose(); 
const kinoDosePaginatin = new Pagination ();


kinoDose.pageLoading(`${GET_FILM_LIST}1`);
kinoDosePaginatin.PaginationList() 