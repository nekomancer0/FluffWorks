import express from 'express';
import compression from 'compression';
import { handler } from './build/handler.js';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(compression);
app.use(handler);
app.use(express.json());

app.set('port', process.env.PORT);

const { exec } = require('child_process');

// Variables de configuration (modifie selon ton cas)
const REPO_OWNER = 'nekomancer0'; // Remplace par ton utilisateur ou organisation GitHub
const REPO_NAME = 'FluffWorks'; // Nom du dépôt GitHub
const BRANCH = 'master'; // Branche par défaut

// Webhook endpoint
app.post('/payload', (req, res) => {
	console.log('Received webhook event:', req.body);

	// Fetch the latest repo files
	const archiveUrl = `https://github.com/${REPO_OWNER}/${REPO_NAME}/archive/refs/heads/${BRANCH}.zip`;
	const outputZip = path.join(__dirname, `${REPO_NAME}.zip`);

	const command = `
        curl -L -o ${outputZip} ${archiveUrl} && unzip -o ${outputZip} -d ./ && rm ${outputZip}`;

	exec(command, (error, stdout, stderr) => {
		if (error) {
			console.error('Error updating repository:', error.message);
			return res.status(500).send('Error updating repository.');
		}

		console.log('Repository updated successfully:', stdout || stderr);
		res.status(200).send('Repository updated successfully.');
	});
});

app.listen(app.get('port'), '::', async () => {
	console.log(`Listening on port: ${app.get('port')}`);
});
