declare type Infer<Type> = Type extends Map<infer Key, any> ? Key : never;
export default Infer;
