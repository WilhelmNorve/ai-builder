def fibonacci_sequence(n):
    if not isinstance(n, int):
        raise TypeError("The number of terms must be an integer.")
    if n < 0:
        raise ValueError("The number of terms must be a non-negative integer.")
    
    if n == 0:
        return []
    elif n == 1:
        return [0]
    elif n == 2:
        return [0, 1]

    result = [0, 1]
    a, b = 0, 1
    for _ in range(2, n):
        a, b = b, a + b
        result.append(b)

    return result