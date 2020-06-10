'use strict';

class BRIBuildInfo {
  constructor() {
    this._dateBuild = '2020-06-10 16:00:09';
    this._versionBuild = 'jenkins-Bricolage-1469';
    this._commitGIT = '1baf36adc19b23e35700db1805883fbc13fe78e6';
  }

  getBuildInfo () {
    return {
      "date": this._dateBuild,
      "version": this._versionBuild,
      "commit": this._commitGIT
    }
  }
}