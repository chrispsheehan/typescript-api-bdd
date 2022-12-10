export function logRequest(reference: string, req: any) {

    console.log(`${reference}: ${req.url}`);
    console.log(`Params: ${JSON.stringify(req.params)}`);
    console.log(`Headers: ${JSON.stringify(req.headers)}`);
}