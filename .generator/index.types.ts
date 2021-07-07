/**
 * Created 06/07/2021
 */

export type MethodsTypes =
    | 'string'
    | 'integer'
    | 'float'
    | 'bool'
    | 'reference'
    | 'any_of'
    | 'array';

export type ObjectsTypes = 
    | 'any_of'
    | 'properties'

export interface ResultFetch {
    version: Version,
    recent_changes: RecentChanges,
    methods: Methods[],
    objects: Objects[]
}

export interface Version {
    major: number,
    minor: number,
    patch: number
}

export interface RecentChanges {
    year: number,
    month: number,
    day: number
}

export interface Methods {
    name: string,
    description: string,
    arguments?: AllDataMethods[],
    multipart_only: boolean,
    return_type: SubType,
    documentation_link: string
}

export type Objects = 
    | AnyOfObjects
    | PropertiesObjects

/** Methods */
export type AllDataMethods =
    | PrimaryMethods.StringMethods
    | PrimaryMethods.IntegerMethods
    | PrimaryMethods.FloatMethods
    | PrimaryMethods.BoolMethods
    | PrimaryMethods.ReferenceMethods
    | PrimaryMethods.AnyOfMethods
    | PrimaryMethods.ArrayMethods

export namespace PrimaryMethods {
    interface MethodsInner {
        name: string,
        description: string,
        required: boolean,
        type: MethodsTypes
    }
    
    export interface StringMethods extends MethodsInner {
        type: 'string',
        default?: string,
        enumeration?: string[]
    }
    
    export interface IntegerMethods extends MethodsInner {
        type: 'integer',
        default: number,
        min?: number,
        max?: number
    }
    
    export interface FloatMethods extends MethodsInner {
        type: 'float'
    }
    
    export interface BoolMethods extends MethodsInner {
        type: 'bool',
        default?: boolean
    }
    
    export interface ReferenceMethods extends MethodsInner {
        type: 'reference',
        reference: string
    }
    
    export interface AnyOfMethods extends MethodsInner {
        type: 'any_of',
        any_of: SubType[]
    }
    
    export interface ArrayMethods extends MethodsInner {
        type: 'array',
        array: SubType
    }
}

/** Sub Methods */
export type SubType = 
    | Sub.SubStringType
    | Sub.SubIntegerType
    | Sub.SubFloatType
    | Sub.SubReferenceType
    | Sub.SubBoolType
    | Sub.SubAnyOfType
    | Sub.SubArrayType

export namespace Sub {
    export interface SubStringType {
        type: 'string'
    }
    
    export interface SubIntegerType {
        type: 'integer'
    }
    
    export interface SubFloatType {
        type: 'float'
    }
    
    export interface SubBoolType {
        type: 'bool',
        default: boolean
    }
    
    export interface SubReferenceType {
        type: 'reference',
        reference: string
    }
    
    export interface SubAnyOfType {
        type: 'any_of',
        any_of: SubType[]
    }
    
    export interface SubArrayType {
        type: 'array',
        array: SubType
    }
}

/** Objects */
export interface ObjectsInner {
    name: string,
    description: string,
    documentation_link: string,
    type?: ObjectsTypes
}

export interface AnyOfObjects extends ObjectsInner {
    type: 'any_of',
    any_of: AllDataMethods[]
}

export interface PropertiesObjects extends ObjectsInner {
    type: 'properties',
    properties: AllDataMethods[]
}