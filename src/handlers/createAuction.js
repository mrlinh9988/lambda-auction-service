async function createAuction(event, context) {
	const { title } = JSON.parse(event.body);
	const now = new Date();

	const auction = {
		title,
		status: 'OPEN',
		createAt: now.toISOString()
	}

  return {
    statusCode: 201,
    body: JSON.stringify(auction),
  };
}

export const handler = createAuction;


