export interface CardProps {
    title: string;
    content: string;
}
export interface PostProps {
  title: string;
  content: string;
  userId: number;
}

export interface PostModalProps {
    isOpen: boolean;
    onClose: () => void
    onSubmit: (post : {title: string, content: string}) => void
}


export enum sizeProps {
    small = "small",
    medium = "medium",
    large = "large"

}
export enum ShoeProp {
    sm = "rounded-sm",
    md = "rounded-md",
    lg = "rounded-full"
}
export interface ButtonProps {
    size: sizeProps
    shape: ShoeProp
}

// interfaces/index.ts
export interface UserProps {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
      street: string;
      suite: string;
      city: string;
      zipcode: string;
      geo: {
        lat: string;
        lng: string;
      };
    };
    phone: string;
    website: string;
    company: {
      name: string;
      catchPhrase: string;
      bs: string;
    };
  }
  
export interface UserCardProps {
    users: UserProps[];
  }