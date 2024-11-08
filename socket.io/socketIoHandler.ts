import { Server } from 'socket.io';

export default function injectSocketIO(server: any) {
	const io = new Server(server);

	io.on('connection', (socket) => {
		console.log(`user connected`);

		socket.emit('login', (user: { username: string; id: string }) => {
			console.log(user);
		});

		socket.on('chat', (message: any) => {
			console.log(message);
			io.sockets.emit('chat', message);
		});

		socket.on('disconnect', (r) => {
			console.log('disconnected', r);
		});
	});

	console.log('SocketIO injected');
}
