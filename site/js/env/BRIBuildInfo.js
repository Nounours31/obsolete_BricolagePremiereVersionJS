'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-09-24 16:00:07';
    this._versionBuild = 'jenkins-Bricolage-1893';
    this._commitGIT = '705449a9c3180b1d69742029457f08504924dbcc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}