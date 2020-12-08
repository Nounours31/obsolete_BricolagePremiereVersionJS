'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-08 12:00:08';
    this._versionBuild = 'jenkins-Bricolage-2192';
    this._commitGIT = 'f13c871117116d07199e9ab1cf80d44d179d2911';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}