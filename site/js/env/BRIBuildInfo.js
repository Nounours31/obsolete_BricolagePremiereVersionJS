'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-06 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1697';
    this._commitGIT = '5f0e7128bb0c15de1872d6e85f6670cf5f1c15c3';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}