'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-08 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-2193';
    this._commitGIT = '485c03b92558bc7843c7d0819a8ef4a9fa47082f';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}