import React from 'react';
import {io} from 'socket.io-client';

export const socket = io('http://localhost:5555');

export const SocketContext = React.createContext();