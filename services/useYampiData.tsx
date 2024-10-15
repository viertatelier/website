export const getYampiProducts = async ({
  page = 1,
  limit = 12,
}: {
  page?: number;
  limit?: number;
}) => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;
  const alias = process.env.YAMPI_ALIAS;

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/products?page=${page}&limit=${limit}&include=images`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json(); // Ler o corpo aqui

  return data;
};

export const getYampiCategory = async ({
  categoryId,
  page = 1,
  limit = 9999,
}: {
  categoryId: string;
  page?: number;
  limit?: number;
}) => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;
  const alias = process.env.YAMPI_ALIAS;

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/categories/${categoryId}/products?page=${page}&limit=${limit}&include=images`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json(); // Ler o corpo aqui

  return data;
};

export const getYampiProduct = async ({
  productId,
}: {
  productId: number;
}) => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;
  const alias = process.env.YAMPI_ALIAS;

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/products/${productId}&include=images`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json(); // Ler o corpo aqui

  return data;
};

export const getYampiProductIds = async () => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;
  const alias = process.env.YAMPI_ALIAS;

  let ids: string[] = [];

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/products?limit=9999`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json();

  const fetchedIds = data.data.map((product: any) => product.id);

  ids = ids.concat(fetchedIds);

  return ids;
};

export const getYampiProductImages = async ({
  sku,
}: {
  sku: string;
}) => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;
  const alias = process.env.YAMPI_ALIAS;

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/skus/${sku}/images`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  console.log('getYampiProductImages', response);

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json(); // Ler o corpo aqui

  return data;
};

export const getYampiSkus = async () => {
  const yampiToken = process.env.YAMPI_TOKEN;
  const yampiSecret = process.env.YAMPI_SECRET;

  const alias = process.env.YAMPI_ALIAS;

  const url = `https://api.dooki.com.br/v2/${alias}/catalog/skus?limit=9999`;

  const response = await fetch(url, {
    headers: {
      'Content-Type': 'application/json',
      'User-Token': yampiToken,
      'User-Secret-Key': yampiSecret,
    } as any,
  });

  if (!response.ok) {
    throw new Error('Falha ao buscar produtos');
  }

  const data = await response.json(); // Ler o corpo aqui

  console.log('getYampiSkus', data);

  return data;
};
