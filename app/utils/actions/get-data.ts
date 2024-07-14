export async function getDataHome() {

    try {
        // const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}objects/6692b2c6dd7e6e1e1690803d?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata,`)
        const res = await fetch(`https://api.cosmicjs.com/v3/buckets/juventude-sj-production/objects/6692b2c6dd7e6e1e1690803d?read_key=abThFzAsgnF1NsI65rMDbjWfeuQ11VVLzQHeqIoY4gv1SfH3P0&depth=1&props=slug,title,metadata,`)

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json();

    } catch (err) {
        throw new Error("" + err)
    }
}

export async function getDataAgenda() {
    try {

        // const res = await fetch(`https://api.cosmicjs.com/v3/buckets/juventude-sj-production/objects?pretty=true&query=%7B%22type%22:%22agenda%22%7D&limit=10&read_key=abThFzAsgnF1NsI65rMDbjWfeuQ11VVLzQHeqIoY4gv1SfH3P0&depth=1&props=slug,title,metadata,id,`)
        const res = await fetch(`https://api.cosmicjs.com/v3/buckets/juventude-sj-production/objects?pretty=true&query=%7B%22type%22:%22agenda%22%7D&limit=10&read_key=abThFzAsgnF1NsI65rMDbjWfeuQ11VVLzQHeqIoY4gv1SfH3P0&depth=1&props=slug,title,metadata,`)

        if (!res.ok) {
            throw new Error("Failed to fetch data")
        }

        return res.json();

    } catch (err) {
        throw new Error("" + err)
    }

}