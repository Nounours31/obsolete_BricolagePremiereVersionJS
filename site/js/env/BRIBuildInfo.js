'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-02-04 16:00:06';
    this._versionBuild = 'jenkins-Bricolage-961';
    this._commitGIT = '34071d854be449509b5db18412e84d8317ffd59c';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}