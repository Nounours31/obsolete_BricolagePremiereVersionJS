'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-15 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-2102';
    this._commitGIT = '1cd0b898675b831cbe52456802fe89650a554b72';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}