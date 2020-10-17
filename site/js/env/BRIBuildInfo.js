'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-10-17 12:00:06';
    this._versionBuild = 'jenkins-Bricolage-1984';
    this._commitGIT = '103a35a62d76829c29904ad94125453e9168e284';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}