'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-03-30 20:00:06';
    this._versionBuild = 'jenkins-Bricolage-1182';
    this._commitGIT = '93f9ad7dc3abe931b9af0ed72bf43f2df44df552';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}