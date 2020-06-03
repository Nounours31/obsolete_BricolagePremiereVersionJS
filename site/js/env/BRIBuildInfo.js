'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-03 20:00:11';
    this._versionBuild = 'jenkins-Bricolage-1442';
    this._commitGIT = '89a1ba51fccc8cfc0feabef784d0268242603937';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}