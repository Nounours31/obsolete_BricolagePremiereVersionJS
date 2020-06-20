'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-20 08:00:07';
    this._versionBuild = 'jenkins-Bricolage-1507';
    this._commitGIT = 'af31baa6849116ae45f1b83800b7462ad14bf274';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}