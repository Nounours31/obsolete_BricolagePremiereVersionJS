'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-11-02 20:00:07';
    this._versionBuild = 'jenkins-Bricolage-2050';
    this._commitGIT = 'dc051220f01d7ed50daf1a35ab5f401dc29700bc';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}