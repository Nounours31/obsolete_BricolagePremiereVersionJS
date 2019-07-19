<?php

/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/**
 * Description of Traces
 *
 * @author PFS
 */
include_once $_SERVER['DOCUMENT_ROOT'].'Bricolage2/server/Envt/BRIENVT.php';

class BRILogger {
    public $_FilePath = null;
    public $_Prefix = null;

    function __construct($prefix = 'Inconnu') {
        $pathForLog = $_SERVER['DOCUMENT_ROOT'].BRIConst::relativeDocRoot.BRIConst::tracePATHTODISK; 
        $this->_FilePath = $pathForLog;
        $this->_Prefix = $prefix;
        try {
            if (!file_exists($this->_FilePath)) {
                $res = mkdir($this->_FilePath, 0777, TRUE);
            }
        }
        catch (Exception $e) {
            echo 'Exception recue : ',  $e->getMessage(), "\n";
            echo 'mkdir KO of : '.$this->_FilePath;
        }
        $this -> _FilePath = $this->_FilePath.BRIConst::traceFILE;
    }

    private function prefix($prefix) {
        $this->_Prefix = $prefix;
        return;
    }

    private function DebugTraceTableau($Message, $Tab, $level) {
        $s = BRITools::arrayToString($Tab);
        $this->DebugTrace($Message . "  " . $s, $level);
        return;
    }

    private function DebugTrace($Message, $level) {
        $TraceLevel = BRIEnvt::getDebugLevel();

        if ($TraceLevel <= $level) {
            $pipo = date('d/m/Y-H:i:s');
            $pipo .= ' # '.$this->_Prefix;
            $logMsg = "[" . $pipo . "] " . $Message . "\n";

            try {
                $filePointer = fopen($this->_FilePath, "a");
                if (flock ($filePointer, LOCK_EX)) {
                    fputs ($filePointer, $logMsg);
                    fflush ($filePointer);
                    flock($filePointer, LOCK_UN);
                }
                fclose($filePointer);
                // print ($logMsg);
            }
            catch (Exception $e) {
                echo 'Exception recue : ',  $e->getMessage(), "\n";
                echo 'mkdir KO of : '.$this->_FilePath;
            }
        }
        return;
    }

    public function all($Message) {
        return $this->DebugTrace($Message, BRIConst::_INFO);
    }

    public function debug($Message) {
        return $this->DebugTrace($Message, BRIConst::_DEBUG);
    }

    public function fatal($Message) {
        return $this->DebugTrace($Message, BRIConst::_FATAL);
    }

    public function debugTab($Message, $anArray) {
        return $this->DebugTraceTableau($Message, $anArray, BRIConst::_DEBUG);
    }
}
