'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-24 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-1042';
    this._commitGIT = 'deffd860c4449e732b9e1288907152631cd73223';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}