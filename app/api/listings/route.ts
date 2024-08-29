import getCurrentUser from "@/app/actions/getCurrentUser";
import { NextResponse } from "next/server";


export async function POST(
    request: Request
) {
    const currentUser = await getCurrentUser();

    if (!currentUser) {
        // TODO: Check if we can return error message for toast
        return NextResponse.error();
    }

    const body = await request.json();
    const {
        title,
        description,
        imageSrc,
        category,
        roomCount,
        bathroomCount,
        guestCount,
        location,
        price
    } = body;

    // TODO: Check if this actually triggers
    Object.keys(body).forEach((value: any) => {
        if (!body[value]) {
            // TODO: Check if we can return error message for toast
            return NextResponse.error();
        }
    })

    const listing = await prisma?.listing.create({
        data: {
            title,
            description,
            imageSrc,
            category,
            roomCount,
            bathroomCount,
            guestCount,
            locationValue: location.value,
            price: parseInt(price, 10),
            userId: currentUser.id,
        }
    })

    return NextResponse.json(listing);
}