
type Infer<Type> = Type extends Map<any, infer Value> ? Value : never;

export default Infer;
