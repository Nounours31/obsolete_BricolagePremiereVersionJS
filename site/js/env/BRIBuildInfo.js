'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-12-02 20:00:08';
    this._versionBuild = 'jenkins-Bricolage-2170';
    this._commitGIT = '8f9f0d4dea5a9da8870474214a7dedf62a61125b';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}