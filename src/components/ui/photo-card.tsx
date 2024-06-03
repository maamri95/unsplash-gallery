import {Photo} from "@/types/photo";
import {Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger} from "@/components/ui/dialog";
import {AspectRatio} from "@/components/ui/aspect-ratio";
import Image from "next/image";

export const PhotoCard = ({photo}: { photo: Photo }) => {
    return (
        <Dialog>
            <DialogTrigger key={photo.id}>
                <div className="w-[90vw] md:w-[40vw] xl:w-[30vw] xl:max-w-[460px]">
                    <AspectRatio ratio={16/9}>
                        <Image
                            alt={photo.user.name}
                            src={photo.urls.small}
                            fill
                            sizes={"(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 33vw"}
                            className="bg-gray-300 max-h-[100%] max-w-[90%] m-auto w-auto rounded-md object-cover"
                        />
                    </AspectRatio>
                </div>
            </DialogTrigger>
            <DialogContent className="dialog-content">
                <DialogHeader>
                    <DialogTitle className="truncate"> Author: {photo.user.name}</DialogTitle>
                </DialogHeader>
                <AspectRatio ratio={16/9}>
                    <Image
                        alt={photo.user.name}
                        src={photo.urls.regular}
                        fill
                        sizes={"(max-width: 768px) 90vw, (max-width: 1280px) 45vw, 33vw"}
                        priority
                        className="bg-gray-300 max-h-[100%] max-w-[90%] m-auto w-auto rounded-md object-cover"
                    />
                </AspectRatio>
            </DialogContent>
        </Dialog>
    )
}