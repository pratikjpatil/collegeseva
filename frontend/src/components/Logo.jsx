const Logo = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold leading-8 text-gray-900">
          Trusted by the world’s most innovative teams
        </h2>
        <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="data:image/png;base64,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"
            alt="Transistor"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="https://assets.owebest.com/files/Blogs/bg_img/3fb1a1ee2fbff71adf551002c19a4dcf/flutter.png"
            alt="Reform"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain lg:col-span-1"
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAT4AAACfCAMAAABX0UX9AAABFFBMVEX////jWivrjCP2vTrvZjmmp6mhoqTvZDbuWyXuXyzp6er3taTiURnQ0NHuVx3vYzXxs6T++PXxfFnwb0TqhAD61c3rjTrGxsj608n3vK3sjyPvYC/jViHzu4zqiBL3wTvlaSq5urvqiCH5yr7iUyryi27d3d773dX1uSH2uy/uVRjr6+z98Oz09PTzkXbwdlHhRgD0oIn85uH++vH74bD989/3wk3zrjPvniz0tjfslHfpgCb1qZXndCfxgF/wckr868z+9eT4yWj51Ir625/75r73xVn4z3r62JbvmjT4zG/97dHpexPwojbmbi7pfzD2z67vo1v53cXnbQDxsXbtmGbzskDjWQDtTQDtljzlZhrytn+ZvDO/AAAKmElEQVR4nO2bfV/ayBaAAwaSSEkEsQhp0QABRUSxL7ZKob3d7q7bevd279697d3v/z3unHlJJslECEixv57nH80kxPg4c+bMmahpCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIgCIIg35xnzzb9BN8zz4+Oftr0M3y3vH15tLV1vPVh08/xXfLuH0QecPTzi00/y3dH5f3R8Zbg6BcMgZl4LskjHGMIzMDbrYg8KhBD4IK8EEEvCobARXj2/ijR9TAELspPqfJoCPx108/3oPmQDHoxgccYAtN48bMy6MVG8MuPm37OB8mzX5TyDpICf8MQmEAV9A5eNw9vk/4wBMb5cKyS96rd7HbfvFYIPH6+6Sd+QHxUBL2DrVftfL6Zy+W6j1UjGEMgRxn0Di7zxB7Vl+vmbg5UIfDdpp/8IfCrKuhdNkEe10cEHl5iCFTxPCXo5fOyPiIQQ2CSjy/Tgl5cnzIEHlzWKpv+FTbHu9/Sg15SnyIEvmrXNv07bI47g55CHxH4TzkEQif9YfXNCXpKfUTg7zwE8k76g+p7Oy/opejLdbuPyQgmyxF26YPWt91bz33VBdFI0BP6HsX9kRB4G3rmU0enpKa/nuePcFpWQeR5xfJafmDl03EiCYkHPU5rP6cQeB2c5/pGpqVi0FnL80fZLiooaF6xsC59T3Jfo/4OXt+o5NHBWTp/EveX0Hfl6iqsb6OvoOCEtK5PHxmBYRKiCnqhPq1yFRf4w+uLJCGX7TR7fGq4qJ7frW80MDlgzRAHXxpref4oTF988K5bn0hCUoJeRB+ZGyIhUNLHKqcXe4z+PvFnnPX54d5wLc8fherztmOsXx9JQr4GGcgcfdEQGOr7FBNUsXXdqa7lqdMAfcW6snW9+qCSolDWvG4r9MkhUOhrtf4Vv7VKX9q6uHIvC+YN6ssdNhPy2oddpT4pBDJ9rdrfyVvH9Q1LVYiC05JQdTGeTCZ7WmXnzDZNy5cnl73Sle9flfYid+yXRtPpqHQRNOwDcGP/rDpqVBbTd9qre55X3xZnYXgH58jBqTg4gVPp6ujveJe+N6Q1RV8QAqm+2mdFuTSmr3JlWw7MJo5llrijgevajb7L280zMfw7umm5juNapjsOQkJnl9wAGu2pSMFhYrK0Emk3HNe+WkTfqVfk80uBLUQKNDXkkJPh52He8ZbV17ymran6eAgk+mr5P5S3jugb6laYxZg+00cmF2dkGaLZcZirsR006a495jN62OjY3P+uoRuzic1v2llAX09KbZibMpwVPY62C9ELjPk0fc3rw9w8fRACu9etWjzoqfRVDId1PJPaskZCn+7QZotmi+zyBvXhWqQDQupjU30+tW84tKPq9ljoIxdCO/nGHs7X14slhqSJzst8RQzfBy57stc0feEkKumDoJebrw9C4L//TJ0NZH0jF0RMS51OaQYi7I7QR773G/udsQkqbBLJNHDhuONSaVy1Ld2kCeOYmrZn/tSiH7IbgT7yxzB3dds8mz91nLBxW/C8AvMI/U/6TJnq4y49qSemEi5kA32t5n/CPhnoa79SvpORns7J+vrke0PnMX8CCaER6DP32Y3AhUNG9QVcu8v+KMOJuQtfoU23pvQGHRekmUOhz3DhT1HpNHjed4c+1uWonhOPqipHNHmBU3Zx8k+RZMI7INfXqj3VdoLEWMy87ZvXWV9Lk/X5ZMyZwYw5cmikYvosHseYIpv8QU2pURv2xeddXzSBPxeGL9VnhrWc2Kojrq8nj02N+itEBinrkuxzp9KgvpOhfx7oa9X+JIuHuL52/i9Y1R0fvV9OX8VkHUv8QDgzEvqC5ilxZF9Qfe44+oQD0BREieBzu0b00uiaN6HPK0SMFNhh6Il/vEizFWp1sd+UjmDQV/tMO1hUXzt/KyoKWfbTJH20Q4WL3iEds2LmDZpLFh3JMNB5xBM0yBlrEh6DaBjzoE/qfPP0FaPRjHZGTxqldShsieJWPRzG89l59OSwWbv5QxxJsa99K2+rLf5KgaRvAmJ4Ctyf7NIUhEyooM8NrXQsJpnOzWZVSplHkbHProQPUn3Sj7xbX2Ji4TrrRW6VDm35YPGlynD033DZJem7vvkrVk9d9MVSSR8UsaCXVDojx6SRX3e+DKm+MMoFfbRksix61hDDdWbIg5yFSQgGNPZJ7UyfJ5BawUQ5Hs08Fgq3+TAFc57GwyMd0ifa4vRDK9Lg/Zp8J+P4aKH3IiV9MNisTmNqMneGS5ZoDS1Nn+azhMawrDHrcqSzGTP51rSYw9LmuL70xKUeN1Lnqoos3vXouK0zxxlCXwKp90U3JFk5uvl0kZtI+qqQ7FpizWYbYzYw0/RpkwGvubqDEfRAuNNUvrcDuU1mffK8CwifXpDBkCPwVmfnFg59MXbkil6wIcm5bbey6puytQJ0O5I6B0EsVZ82JAtklhK7MOgT+ox71VcuiimkwEZtgYW+ZXfnIvpgQzKcPG7b7Xxmfb7D3DmjjrxGSdcHCbNuUukGyWXM9Q5eum7joY9PINoCK7ZUdmJbauKdDL4hnlnfGJZss0l8r/IufXA8telC2adTRGLqGGXVl5g6CqI7wtcTCH1wFtKX3raYgJchrg+KqbcHwR5cZn2Qt8mJB2eOPjKbVV2a4vixxIXmgaWs+nqxs6dBHghRr+dxl3B5HdK/BVZsapL6YA4J9uAy64Pe4l4lrpirjyfIfaFLcGawPDKbvlAXQ6TN7Ltw6UubxeJjGVT6ct2g9pJZH03ckt1vAX0duhKhizYrCJsdCH2OllVfyqJNE2JFtcGLZt3ZUerLNZfX1zDDKgo5I6rNan37Uj/jC7mpXDK4gIoXXcNl1KcuGQBcGFNbDotZy3Hv+jQdqlE6LU1VGs6ArdRS9OnmTGx7XOisDkrXwVaVFawsuWCVRZ8mSTr15NpevVgIzfKq4PKbS/evrz+ge+aGP6pCRseq7Wp9ZIFsWKY/aTRKPqyOHZKhaGOLlUtHvh4tl2bSF5ZLvWgP44tlfsSuyrJii3L/+rTGgBfb2Yp3AJ1Hqa/yhS1OXIsvUwZ0iTK15M+bQbE+kz5VsZ5RLEif9KLnMjNHX20JfSTeBy+/GHaVFqnVva9ftZ1wV8kY8MnEl7eKeJkms77oVlEhzIsjs0pPWbReHEnf7wl9rXzK3lCMyhfThA0IwfDKNC3XtUz7jIe2vYFlDSR9cAiy9qG24BiG4Vr2LKhbNRzaSNbMZ6KNbVSG0BfUFPoIyY3KSHArS9VpMhETVnifUqq4POYblkJfa7GuB3QI+3JDZb80Hpc64fZIBdAUh8POeDrbPRtFX6okjbszX1q88G3ygNMeIRGzYq0nZdLVvHoveU1wFDnIjqwvn2++CfXVPuO/UM4lqi/fpO8bEH21r8oNcSRKTB8XmHwLCFGS0Ac75/97+gP/21AmFPoe+D8ePChQ30qgvpVAfSuB+lYC9a0E6lsJ1LcSqG8lUN9KoL6V2DlHfavQePQkpg/LLVkQ/7XG9WWoMSOU/uxRoA9rzEsAIxj0YY15OSqj8+5jDHrL09c//Y015hX4Fv9DjyAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI8iPwf8KNMeqvhmVvAAAAAElFTkSuQmCC"
            alt="Tuple"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 max-h-12 w-full object-contain sm:col-start-2 lg:col-span-1"
            src="https://blog.replit.com//images/logo.png"
            alt="SavvyCal"
            width={158}
            height={48}
          />
          <img
            className="col-span-2 col-start-2 max-h-12 w-full object-contain sm:col-start-auto lg:col-span-1"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMajBPhxngjt7TWmFYsbms8CwjFjiVasbOSa7h6aUt0bc2T6yL0y4NWe0NiIqp48SdsQ&usqp=CAU"
            alt="Statamic"
            width={158}
            height={48}
          />
        </div>
      </div>
    </div>
  );
};

export default Logo;
