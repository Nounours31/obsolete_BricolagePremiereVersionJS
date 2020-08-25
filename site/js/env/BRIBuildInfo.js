'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-08-25 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1771';
    this._commitGIT = 'eb6a021c53d24e047c57d6dcf45192c6569a7664';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}