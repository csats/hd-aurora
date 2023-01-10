import { createClient } from '@supabase/supabase-js'

const {
  AURORA_DATABASE_URL,
  AURORA_DATABASE_SECRET_API_KEY
} = process.env;

const supabase = createClient(AURORA_DATABASE_URL, AURORA_DATABASE_SECRET_API_KEY);

exports.handler = async function (event, context) {
  const { data, error } = await supabase
    .from('orders')
    .insert([
      { requestor : 'Dr. John Doe' },
    ]);

  console.log(data, error);

  return {
    statusCode: 200,
    body: JSON.stringify({ data }),
  };
};