PR['registerLangHandler'](
    PR['createSimpleLexer'](
        [
        ],
        [
            [PR['PR_COMMENT'], /(\/\/(.)*|\/\*(.)*\*\/)/],
            [PR['PR_STRING'], /"(.)*"/],
            [PR['PR_KEYWORD'], /\b(const|if|for|sizeof|ifdef|else|elif|endif|define|typedef|volatile|return|restrict)\b/],
            [PR['PR_KEYWORD'], /(%f[0-9]+)\b/],
            [PR['PR_TYPE'], /\b(void|int|float|float2|float4|float8|float16|floatX|double|uint|uint4|struct|union|size_t|cl_mem|rn|f32)\b/],
            [PR['PR_DECLARATION'], /\b(__local|__global|__kernel|__attribute__|get_global_id|get_local_id|get_group_id|clCreateKernel|clSetKernelArg|clEnqueueNDRangeKernel|clWaitForEvents|barrier|__shfl|__ldg|cudaDeviceSetSharedMemConfig|cudaDeviceSetCacheConfig)\b/],
            [PR['PR_LITERAL'], /([0-9]|NULL|CLK_LOCAL_MEM_FENCE|cudaFuncCachePreferEqual|cudaSharedMemBankSizeEightByte)/],
            [PR['PR_KEYWORD'], /(%r[0-9]+)\b/],
        ]
    ),
    ['cuda']
);