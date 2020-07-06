'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-07-06 16:00:10';
    this._versionBuild = 'jenkins-Bricolage-1573';
    this._commitGIT = '5804bc5ca5d6ca0e08477803df119d2e0718dec1';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}