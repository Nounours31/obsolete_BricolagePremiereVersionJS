'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-18 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2114';
    this._commitGIT = 'a01cbae3c578125353be4cfb7c68837ec57c373a';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}