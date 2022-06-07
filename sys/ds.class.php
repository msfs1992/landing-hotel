<?php 
    class DataScience
    {
        private static $information;

        function __construct()
        {
            self::$information = $this->getInfo();
        }
        private function getUserIpAddr(){
            if(!empty($_SERVER['HTTP_CLIENT_IP'])){
                //ip from share internet
                $ip = $_SERVER['HTTP_CLIENT_IP'];
            }elseif(!empty($_SERVER['HTTP_X_FORWARDED_FOR'])){
                //ip pass from proxy
                $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
            }else{
                $ip = $_SERVER['REMOTE_ADDR'];
            }
            return $ip;
        }
        protected function getInfo(){
            // create curl resource 
            $ch = curl_init(); 

            // set url 
            curl_setopt($ch, CURLOPT_URL, "https://api.ipgeolocation.io/ipgeo?ip=".$this->getUserIpAddr()."&apiKey=e9d536ba66dc4edfa18a406419a9f19c"); 

            //return the transfer as a string 
            curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1); 

            // $output contains the output string 
            $output = curl_exec($ch); 

            // close curl resource to free up system resources 
            curl_close($ch);      
            return json_decode($output);
        }
        public function information(){
            return self::$information;
        }
    }
?>