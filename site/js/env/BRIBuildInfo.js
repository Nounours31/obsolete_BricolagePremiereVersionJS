'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2019-07-17 08:00:12';
    this._versionBuild = 'jenkins-Bricolage-151';
    this._commitGIT = '9a300ca72807eada3402280df69192f6d4499e80';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}