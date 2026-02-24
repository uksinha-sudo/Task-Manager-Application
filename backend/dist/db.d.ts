import mongoose from "mongoose";
export declare const userModel: mongoose.Model<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, mongoose.Document<unknown, {}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        username?: string | null;
        email?: string | null;
        password?: string | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        username?: string | null;
        email?: string | null;
        password?: string | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    username?: string | null;
    email?: string | null;
    password?: string | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
export declare const taskModel: mongoose.Model<{
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {}, {}, {
    id: string;
}, mongoose.Document<unknown, {}, {
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, mongoose.Schema<any, mongoose.Model<any, any, any, any, any, any, any>, {}, {}, {}, {}, mongoose.DefaultSchemaOptions, {
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, mongoose.Document<unknown, {}, {
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
}, {
    id: string;
}, mongoose.DefaultSchemaOptions> & Omit<{
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}, "id"> & {
    id: string;
}, {
    [path: string]: mongoose.SchemaDefinitionProperty<undefined, any, any>;
} | {
    [x: string]: mongoose.SchemaDefinitionProperty<any, any, mongoose.Document<unknown, {}, {
        description?: string | null;
        status?: boolean | null;
        dueDate?: NativeDate | null;
        createdAt?: NativeDate | null;
        title?: string | null;
        userId?: mongoose.Types.ObjectId | null;
    }, {
        id: string;
    }, mongoose.DefaultSchemaOptions> & Omit<{
        description?: string | null;
        status?: boolean | null;
        dueDate?: NativeDate | null;
        createdAt?: NativeDate | null;
        title?: string | null;
        userId?: mongoose.Types.ObjectId | null;
    } & {
        _id: mongoose.Types.ObjectId;
    } & {
        __v: number;
    }, "id"> & {
        id: string;
    }> | undefined;
}, {
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>, {
    description?: string | null;
    status?: boolean | null;
    dueDate?: NativeDate | null;
    createdAt?: NativeDate | null;
    title?: string | null;
    userId?: mongoose.Types.ObjectId | null;
} & {
    _id: mongoose.Types.ObjectId;
} & {
    __v: number;
}>;
//# sourceMappingURL=db.d.ts.map